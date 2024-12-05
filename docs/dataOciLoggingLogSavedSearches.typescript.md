# `dataOciLoggingLogSavedSearches` Submodule <a name="`dataOciLoggingLogSavedSearches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoggingLogSavedSearches <a name="DataOciLoggingLogSavedSearches" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches oci_logging_log_saved_searches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches(scope: Construct, id: string, config: DataOciLoggingLogSavedSearchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig">DataOciLoggingLogSavedSearchesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig">DataOciLoggingLogSavedSearchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetLogSavedSearchId">resetLogSavedSearchId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLoggingLogSavedSearchesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogSavedSearchId` <a name="resetLogSavedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetLogSavedSearchId"></a>

```typescript
public resetLogSavedSearchId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoggingLogSavedSearches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isConstruct"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformElement"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformDataSource"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoggingLogSavedSearches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoggingLogSavedSearches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoggingLogSavedSearches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoggingLogSavedSearches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList">DataOciLoggingLogSavedSearchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchSummaryCollection">logSavedSearchSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchIdInput">logSavedSearchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchId">logSavedSearchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.filter"></a>

```typescript
public readonly filter: DataOciLoggingLogSavedSearchesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList">DataOciLoggingLogSavedSearchesFilterList</a>

---

##### `logSavedSearchSummaryCollection`<sup>Required</sup> <a name="logSavedSearchSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchSummaryCollection"></a>

```typescript
public readonly logSavedSearchSummaryCollection: DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLoggingLogSavedSearchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logSavedSearchIdInput`<sup>Optional</sup> <a name="logSavedSearchIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchIdInput"></a>

```typescript
public readonly logSavedSearchIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logSavedSearchId`<sup>Required</sup> <a name="logSavedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.logSavedSearchId"></a>

```typescript
public readonly logSavedSearchId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoggingLogSavedSearchesConfig <a name="DataOciLoggingLogSavedSearchesConfig" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingLogSavedSearchesConfig: dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#compartment_id DataOciLoggingLogSavedSearches#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#id DataOciLoggingLogSavedSearches#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.logSavedSearchId">logSavedSearchId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#log_saved_search_id DataOciLoggingLogSavedSearches#log_saved_search_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#name DataOciLoggingLogSavedSearches#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#compartment_id DataOciLoggingLogSavedSearches#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLoggingLogSavedSearchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#filter DataOciLoggingLogSavedSearches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#id DataOciLoggingLogSavedSearches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logSavedSearchId`<sup>Optional</sup> <a name="logSavedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.logSavedSearchId"></a>

```typescript
public readonly logSavedSearchId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#log_saved_search_id DataOciLoggingLogSavedSearches#log_saved_search_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#name DataOciLoggingLogSavedSearches#name}.

---

### DataOciLoggingLogSavedSearchesFilter <a name="DataOciLoggingLogSavedSearchesFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingLogSavedSearchesFilter: dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#name DataOciLoggingLogSavedSearches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#values DataOciLoggingLogSavedSearches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#regex DataOciLoggingLogSavedSearches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#name DataOciLoggingLogSavedSearches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#values DataOciLoggingLogSavedSearches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_searches#regex DataOciLoggingLogSavedSearches#regex}.

---

### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection: dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection = { ... }
```


### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems: dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoggingLogSavedSearchesFilterList <a name="DataOciLoggingLogSavedSearchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.get"></a>

```typescript
public get(index: number): DataOciLoggingLogSavedSearchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoggingLogSavedSearchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>[]

---


### DataOciLoggingLogSavedSearchesFilterOutputReference <a name="DataOciLoggingLogSavedSearchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoggingLogSavedSearchesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesFilter">DataOciLoggingLogSavedSearchesFilter</a>

---


### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItems</a>

---


### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference <a name="DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingLogSavedSearches } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingLogSavedSearches.DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection">DataOciLoggingLogSavedSearchesLogSavedSearchSummaryCollection</a>

---



