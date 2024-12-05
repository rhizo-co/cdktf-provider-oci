# `dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories oci_delegate_access_control_delegated_resource_access_request_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestHistoryCollection">delegatedResourceAccessRequestHistoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestIdInput">delegatedResourceAccessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `delegatedResourceAccessRequestHistoryCollection`<sup>Required</sup> <a name="delegatedResourceAccessRequestHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestHistoryCollection"></a>

```typescript
public readonly delegatedResourceAccessRequestHistoryCollection: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filter"></a>

```typescript
public readonly filter: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList</a>

---

##### `delegatedResourceAccessRequestIdInput`<sup>Optional</sup> <a name="delegatedResourceAccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestIdInput"></a>

```typescript
public readonly delegatedResourceAccessRequestIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig: dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#filter DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection: dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection = { ... }
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems: dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems = { ... }
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter: dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#name DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#values DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#regex DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#name DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#values DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#regex DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.requestStatus">requestStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `requestStatus`<sup>Required</sup> <a name="requestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.requestStatus"></a>

```typescript
public readonly requestStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>[]

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>

---



