# `dataOciFusionAppsFusionEnvironmentAdminUsers` Submodule <a name="`dataOciFusionAppsFusionEnvironmentAdminUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsers <a name="DataOciFusionAppsFusionEnvironmentAdminUsers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users oci_fusion_apps_fusion_environment_admin_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentAdminUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig">DataOciFusionAppsFusionEnvironmentAdminUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig">DataOciFusionAppsFusionEnvironmentAdminUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFusionAppsFusionEnvironmentAdminUsersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentAdminUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentAdminUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentAdminUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.adminUserCollection">adminUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList">DataOciFusionAppsFusionEnvironmentAdminUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adminUserCollection`<sup>Required</sup> <a name="adminUserCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.adminUserCollection"></a>

```typescript
public readonly adminUserCollection: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filter"></a>

```typescript
public readonly filter: DataOciFusionAppsFusionEnvironmentAdminUsersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList">DataOciFusionAppsFusionEnvironmentAdminUsersFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFusionAppsFusionEnvironmentAdminUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection: dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection = { ... }
```


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems: dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems = { ... }
```


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems: dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems = { ... }
```


### DataOciFusionAppsFusionEnvironmentAdminUsersConfig <a name="DataOciFusionAppsFusionEnvironmentAdminUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentAdminUsersConfig: dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFusionAppsFusionEnvironmentAdminUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#filter DataOciFusionAppsFusionEnvironmentAdminUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFusionAppsFusionEnvironmentAdminUsersFilter <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentAdminUsersFilter: dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#name DataOciFusionAppsFusionEnvironmentAdminUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#values DataOciFusionAppsFusionEnvironmentAdminUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#regex DataOciFusionAppsFusionEnvironmentAdminUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#name DataOciFusionAppsFusionEnvironmentAdminUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#values DataOciFusionAppsFusionEnvironmentAdminUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#regex DataOciFusionAppsFusionEnvironmentAdminUsers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList</a>

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersFilterList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentAdminUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>[]

---


### DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentAdminUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentAdminUsersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>

---



