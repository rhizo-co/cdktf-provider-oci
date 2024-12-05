# `dataOciApmConfigConfigs` Submodule <a name="`dataOciApmConfigConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmConfigConfigs <a name="DataOciApmConfigConfigs" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs oci_apm_config_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigs(scope: Construct, id: string, config: DataOciApmConfigConfigsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig">DataOciApmConfigConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig">DataOciApmConfigConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetConfigType">resetConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagEquals">resetDefinedTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagExists">resetDefinedTagExists</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagEquals">resetFreeformTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagExists">resetFreeformTagExists</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOptionsGroup">resetOptionsGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmConfigConfigsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]

---

##### `resetConfigType` <a name="resetConfigType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetConfigType"></a>

```typescript
public resetConfigType(): void
```

##### `resetDefinedTagEquals` <a name="resetDefinedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagEquals"></a>

```typescript
public resetDefinedTagEquals(): void
```

##### `resetDefinedTagExists` <a name="resetDefinedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagExists"></a>

```typescript
public resetDefinedTagExists(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFreeformTagEquals` <a name="resetFreeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagEquals"></a>

```typescript
public resetFreeformTagEquals(): void
```

##### `resetFreeformTagExists` <a name="resetFreeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagExists"></a>

```typescript
public resetFreeformTagExists(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOptionsGroup` <a name="resetOptionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOptionsGroup"></a>

```typescript
public resetOptionsGroup(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmConfigConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmConfigConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmConfigConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmConfigConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmConfigConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configCollection">configCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList">DataOciApmConfigConfigsConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList">DataOciApmConfigConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configTypeInput">configTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEqualsInput">definedTagEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExistsInput">definedTagExistsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEqualsInput">freeformTagEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExistsInput">freeformTagExistsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroupInput">optionsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEquals">definedTagEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExists">definedTagExists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEquals">freeformTagEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExists">freeformTagExists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroup">optionsGroup</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configCollection"></a>

```typescript
public readonly configCollection: DataOciApmConfigConfigsConfigCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList">DataOciApmConfigConfigsConfigCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filter"></a>

```typescript
public readonly filter: DataOciApmConfigConfigsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList">DataOciApmConfigConfigsFilterList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configTypeInput"></a>

```typescript
public readonly configTypeInput: string;
```

- *Type:* string

---

##### `definedTagEqualsInput`<sup>Optional</sup> <a name="definedTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEqualsInput"></a>

```typescript
public readonly definedTagEqualsInput: string[];
```

- *Type:* string[]

---

##### `definedTagExistsInput`<sup>Optional</sup> <a name="definedTagExistsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExistsInput"></a>

```typescript
public readonly definedTagExistsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmConfigConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]

---

##### `freeformTagEqualsInput`<sup>Optional</sup> <a name="freeformTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEqualsInput"></a>

```typescript
public readonly freeformTagEqualsInput: string[];
```

- *Type:* string[]

---

##### `freeformTagExistsInput`<sup>Optional</sup> <a name="freeformTagExistsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExistsInput"></a>

```typescript
public readonly freeformTagExistsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `optionsGroupInput`<sup>Optional</sup> <a name="optionsGroupInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroupInput"></a>

```typescript
public readonly optionsGroupInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `definedTagEquals`<sup>Required</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEquals"></a>

```typescript
public readonly definedTagEquals: string[];
```

- *Type:* string[]

---

##### `definedTagExists`<sup>Required</sup> <a name="definedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExists"></a>

```typescript
public readonly definedTagExists: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTagEquals`<sup>Required</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEquals"></a>

```typescript
public readonly freeformTagEquals: string[];
```

- *Type:* string[]

---

##### `freeformTagExists`<sup>Required</sup> <a name="freeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExists"></a>

```typescript
public readonly freeformTagExists: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `optionsGroup`<sup>Required</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroup"></a>

```typescript
public readonly optionsGroup: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmConfigConfigsConfig <a name="DataOciApmConfigConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfig: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.configType">configType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagEquals">definedTagEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagExists">definedTagExists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagEquals">freeformTagEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagExists">freeformTagExists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.optionsGroup">optionsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}.

---

##### `configType`<sup>Optional</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}.

---

##### `definedTagEquals`<sup>Optional</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagEquals"></a>

```typescript
public readonly definedTagEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}.

---

##### `definedTagExists`<sup>Optional</sup> <a name="definedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagExists"></a>

```typescript
public readonly definedTagExists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmConfigConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#filter DataOciApmConfigConfigs#filter}

---

##### `freeformTagEquals`<sup>Optional</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagEquals"></a>

```typescript
public readonly freeformTagEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}.

---

##### `freeformTagExists`<sup>Optional</sup> <a name="freeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagExists"></a>

```typescript
public readonly freeformTagExists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionsGroup`<sup>Optional</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.optionsGroup"></a>

```typescript
public readonly optionsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}.

---

### DataOciApmConfigConfigsConfigCollection <a name="DataOciApmConfigConfigsConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollection: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection = { ... }
```


### DataOciApmConfigConfigsConfigCollectionItems <a name="DataOciApmConfigConfigsConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollectionItems: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems = { ... }
```


### DataOciApmConfigConfigsConfigCollectionItemsDimensions <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollectionItemsDimensions: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions = { ... }
```


### DataOciApmConfigConfigsConfigCollectionItemsInUseBy <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollectionItemsInUseBy: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy = { ... }
```


### DataOciApmConfigConfigsConfigCollectionItemsMetrics <a name="DataOciApmConfigConfigsConfigCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollectionItemsMetrics: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics = { ... }
```


### DataOciApmConfigConfigsConfigCollectionItemsRules <a name="DataOciApmConfigConfigsConfigCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsConfigCollectionItemsRules: dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules = { ... }
```


### DataOciApmConfigConfigsFilter <a name="DataOciApmConfigConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciApmConfigConfigsFilter: dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#name DataOciApmConfigConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#values DataOciApmConfigConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#regex DataOciApmConfigConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#name DataOciApmConfigConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#values DataOciApmConfigConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#regex DataOciApmConfigConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmConfigConfigsConfigCollectionItemsDimensionsList <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.valueSource">valueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions">DataOciApmConfigConfigsConfigCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions">DataOciApmConfigConfigsConfigCollectionItemsDimensions</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsInUseByList <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseByList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.optionsGroup">optionsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy">DataOciApmConfigConfigsConfigCollectionItemsInUseBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `optionsGroup`<sup>Required</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.optionsGroup"></a>

```typescript
public readonly optionsGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollectionItemsInUseBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy">DataOciApmConfigConfigsConfigCollectionItemsInUseBy</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsList <a name="DataOciApmConfigConfigsConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionItemsMetricsList <a name="DataOciApmConfigConfigsConfigCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.valueSource">valueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics">DataOciApmConfigConfigsConfigCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollectionItemsMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics">DataOciApmConfigConfigsConfigCollectionItemsMetrics</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList">DataOciApmConfigConfigsConfigCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterId">filterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterText">filterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.inUseBy">inUseBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList">DataOciApmConfigConfigsConfigCollectionItemsInUseByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList">DataOciApmConfigConfigsConfigCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.opcDryRun">opcDryRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList">DataOciApmConfigConfigsConfigCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems">DataOciApmConfigConfigsConfigCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciApmConfigConfigsConfigCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList">DataOciApmConfigConfigsConfigCollectionItemsDimensionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterText"></a>

```typescript
public readonly filterText: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inUseBy`<sup>Required</sup> <a name="inUseBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.inUseBy"></a>

```typescript
public readonly inUseBy: DataOciApmConfigConfigsConfigCollectionItemsInUseByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList">DataOciApmConfigConfigsConfigCollectionItemsInUseByList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.metrics"></a>

```typescript
public readonly metrics: DataOciApmConfigConfigsConfigCollectionItemsMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList">DataOciApmConfigConfigsConfigCollectionItemsMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.opcDryRun"></a>

```typescript
public readonly opcDryRun: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciApmConfigConfigsConfigCollectionItemsRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList">DataOciApmConfigConfigsConfigCollectionItemsRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems">DataOciApmConfigConfigsConfigCollectionItems</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsRulesList <a name="DataOciApmConfigConfigsConfigCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.filterText">filterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isApplyToErrorSpans">isApplyToErrorSpans</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.satisfiedResponseTime">satisfiedResponseTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.toleratingResponseTime">toleratingResponseTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules">DataOciApmConfigConfigsConfigCollectionItemsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.filterText"></a>

```typescript
public readonly filterText: string;
```

- *Type:* string

---

##### `isApplyToErrorSpans`<sup>Required</sup> <a name="isApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isApplyToErrorSpans"></a>

```typescript
public readonly isApplyToErrorSpans: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `satisfiedResponseTime`<sup>Required</sup> <a name="satisfiedResponseTime" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.satisfiedResponseTime"></a>

```typescript
public readonly satisfiedResponseTime: number;
```

- *Type:* number

---

##### `toleratingResponseTime`<sup>Required</sup> <a name="toleratingResponseTime" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.toleratingResponseTime"></a>

```typescript
public readonly toleratingResponseTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollectionItemsRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules">DataOciApmConfigConfigsConfigCollectionItemsRules</a>

---


### DataOciApmConfigConfigsConfigCollectionList <a name="DataOciApmConfigConfigsConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmConfigConfigsConfigCollectionOutputReference <a name="DataOciApmConfigConfigsConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList">DataOciApmConfigConfigsConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection">DataOciApmConfigConfigsConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApmConfigConfigsConfigCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList">DataOciApmConfigConfigsConfigCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmConfigConfigsConfigCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection">DataOciApmConfigConfigsConfigCollection</a>

---


### DataOciApmConfigConfigsFilterList <a name="DataOciApmConfigConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get"></a>

```typescript
public get(index: number): DataOciApmConfigConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmConfigConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>[]

---


### DataOciApmConfigConfigsFilterOutputReference <a name="DataOciApmConfigConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmConfigConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmConfigConfigsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>

---



